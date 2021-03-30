class TweetCounts {
  constructor() {
    this.freqInterval = {
      minute: 60,
      hour: 3600,
      day: 86400,
    };
    this.data = new Map();
  }

  recordTweet(name, time) {
    if (this.data.has(name) === false) {
      this.data.set(name, []);
    }
    this.data.get(name).push(time);
  }

  getTweetCountsPerFrequency(freq, name, start, end) {
    const interval = this.freqInterval[freq];
    const ret = new Uint16Array(Math.ceil((end - start + 1) / interval));
    if (this.data.has(name)) {
      for (const time of this.data.get(name)) {
        if (time > end || time < start) continue;
        ++ret[Math.floor((time - start + 1) / interval)];
      }
    }
    return ret;
  }
};