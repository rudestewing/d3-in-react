import { useState } from 'react'
import Comment from '@/components/Comment'

const dataComments = [
  {
    id: 1,
    user: 'adamsdavid',
    time: '20 hours ago',
    clap: 2,
    body:
      'A comment box with nested replies. Perfect for practicing positioning. Intermediate level.',
    replies: [
      {
        id: 11,
        user: 'saramay',
        time: '16 hours ago',
        clap: 5,
        body:
          'A comment box with nested replies. Perfect for practicing positioning. Intermediate level.',
        replies: [
          {
            id: 111,
            user: 'jessica21',
            time: '16 hours ago',
            clap: 5,
            body:
              'A comment box with nested replies. Perfect for practicing positioning. Intermediate level.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    user: 'andrew231',
    time: '20 hours ago',
    clap: 2,
    body:
      'A comment box with nested replies. Perfect for practicing positioning. Intermediate level.',
  },
]

const PageComponent = () => {
  const comments = useState([...dataComments])

  function renderComment(item) {
    console.log('item', item)

    return (
      <Comment
        key={item.id}
        id={item.id}
        user={String(item.user)}
        time={String(item.time)}
        clap={parseInt(item.clap)}
        body={String(item.body)}
      >
        {item.replies && item.replies.length && renderComments(item.replies)}
      </Comment>
    )
  }

  function renderComments(items = []) {
    const Comments = Array.from(items).map((item) => {
      return <div key={item.id}>{renderComment(item)}</div>
    })

    return Comments
  }

  return <>{renderComments(comments)}</>
}

export default PageComponent
