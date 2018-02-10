export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://willmatic:illwill22@cluster0-shard-00-00-kqhmg.mongodb.net:27017,cluster0-shard-00-01-kqhmg.mongodb.net:27017,cluster0-shard-00-02-kqhmg.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

export default {
  db
};
