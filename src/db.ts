import * as SQLite from 'expo-sqlite';

export async function getDb() {
  const db = await SQLite.openDatabaseAsync('protectors.db');
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS protector_data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      brand TEXT, model TEXT, screen_size REAL, notch_type TEXT, pid TEXT
    );
  `);
  return db;
}

export async function searchPhones(q: string) {
  const db = await getDb();
  return await db.getAllAsync('SELECT * FROM protector_data WHERE model LIKE ? OR brand LIKE ?', [`%${q}%`, `%${q}%`]);
}

export async function addPhone(p: any) {
  const db = await getDb();
  return await db.runAsync('INSERT INTO protector_data (brand, model, screen_size, notch_type, pid) VALUES (?,?,?,?,?)', [p.brand, p.model, p.screen_size, p.notch_type, p.pid]);
}
