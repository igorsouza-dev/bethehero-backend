import connection from '../../database/connection';

export default {
  async store(req, res) {
    const { id } = req.body;
    const ong = await connection('ongs')
      .where('id', id)
      .select('*')
      .first();
    if (!ong) {
      return res.status(401).json({ error: 'Ong not found!' });
    }
    return res.json(ong);
  },
};
