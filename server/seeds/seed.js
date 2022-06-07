const db = require('../config/connection');
const { User, Memory } = require('../models');
const userSeeds = require('./userSeeds.json');
const memorySeeds = require('./memorySeeds.json');

db.once('open', async () => {
try {
  await User.deleteMany({});
  await Memory.deleteMany({});

  await User.create(userSeeds);

  for (let i = 0; i < memorySeeds.length; i++) {
    const { _id, memoryAuthor } = await Memory.create(memorySeeds[i]);
    const user = await User.findOneAndUpdate(
      { username: memoryAuthor },
      {
        $addToSet: {
          memories: _id,
        },
      }
    );
  }

//   const users = await User.insertMany(userSeeds);
//   const memories = await Memory.insertMany(memorySeeds)

} catch (err) {
    console.error(err);
    process.exit(1);
}

  console.log('Users and Memories seeded!');
  process.exit(0);
});
