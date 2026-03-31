import db from './db.js';

// Hàm 1: Xóa dữ liệu trong các bảng nhưng giữ nguyên cấu trúc (TRUNCATE)

export const clearAllTables = async () => {
  try {
    await db.query('SET FOREIGN_KEY_CHECKS = 0');
    await db.query('TRUNCATE TABLE posts');
    await db.query('TRUNCATE TABLE categories');
    await db.query('TRUNCATE TABLE users');
    await db.query('SET FOREIGN_KEY_CHECKS = 1');
    console.log('🧹 All table data cleared (Structure remains).');
  } catch (error) {
    console.error('❌ Clear failed:', error.message);
  }
};

// Hàm 2: Xóa hoàn toàn các bảng (DROP) - Mất luôn cấu trúc
export const dropAllTables = async () => {
  try {
    console.log('Warning: Dropping all tables...');

    await db.query('SET FOREIGN_KEY_CHECKS = 0');

    // Liệt kê các bảng muốn xóa sổ
    const tables = ['posts', 'categories', 'users'];
    for (const table of tables) {
      await db.query(`DROP TABLE IF EXISTS ${table}`);
    }

    await db.query('SET FOREIGN_KEY_CHECKS = 1');
    console.log('All tables have been DELETED from database.');
  } catch (error) {
    console.error('Drop failed:', error.message);
  }
};