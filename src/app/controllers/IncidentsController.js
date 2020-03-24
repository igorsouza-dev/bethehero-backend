import connection from '../../database/connection';

export default {
  async index(req, res) {
    const { page = 1 } = req.query;
    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);
    res.header('X-Total-Count', count['count(*)']);
    return res.json(incidents);
  },
  async show(req, res) {
    const { id } = req.params;

    const incident = await connection('incidents')
      .where('id', id)
      .select('*')
      .first();
    return res.json(incident);
  },
  async store(req, res) {
    const { title, description, value } = req.body;
    const { ong_id } = req.headers;
    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });
    return res.json({ id });
  },
  async update(req, res) {
    const { id } = req.params;
    const { ong_id } = req.headers;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();
    if (incident.ong_id !== ong_id) {
      return res
        .status(401)
        .json({ error: 'You are not allowed to do this operation' });
    }
    await connection('incidents')
      .where('id', id)
      .update(req.body);
    const updated = await connection('incidents')
      .where('id', id)
      .select('*')
      .first();
    return res.json(updated);
  },
  async destroy(req, res) {
    const { id } = req.params;
    const { ong_id } = req.headers;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();
    if (incident.ong_id !== ong_id) {
      return res
        .status(401)
        .json({ error: 'You are not allowed to do this operation' });
    }
    await connection('incidents')
      .where('id', id)
      .delete();
    return res.status(204).send();
  },
};
