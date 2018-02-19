import React, { Component } from 'react';
import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient({
  host: 'localhost'
});

class DbList extends Component {
  state = { dbs: 0 };

  async componentDidMount() {
    try {
      const dbs = await client.configAsync('GET', 'databases');
      const activeDbs = await client.infoAsync('keyspace');
      console.log(typeof activeDbs);
      // activeDbs = activeDbs.split(',');
      console.log('activeDbs', activeDbs.split('\n')[1].split(','));
      console.log(client);
      this.setState({ dbs });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <div>
          Are we connected?:
          {this.state.dbs.length ? 'were connected' : 'nah bitch'}
        </div>
        <div>
          How many Dbs?
          {this.state.dbs[1]}
        </div>
      </div>
    );
  }
}

export default DbList;
