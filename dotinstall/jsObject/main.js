'use strict';

class Post {
  constructor(text) {
    this.text = text
    this.likeCount = 0
  }

  show() {
    console.log(`$(this.text) - $(this.likeCount)いいね`)
  }
}

const posts = [
  new Post('LOVE JS'),
  new Post('追い込め！'),
]

posts[0].show();
posts[1].show();
