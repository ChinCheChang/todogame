export const result = {
  result: [1, 2],
  entities: {
    articles: [
      {
        id: 1,
        title: 'Some Article',
        author: 2,
        tasks: [ 1, 5 ]
      },
      {
        id: 2,
        title: 'Other Article',
        author: 1,
        tasks: [ 2, 4 ]
      }
    ],
    users: [
      {
        id: 1,
        name: 'Dan'
      },
      {
        id: 2,
        name: 'john'
      }
    ],
    tasks: [
      {
        id: 1,
        title: 'walking dog1',
        content: 'walking dog in Daan park',
        subNodes: [ 3 ],
        preNode: [ ],
        articles: [ 1 ]
      },
      {
        id: 2,
        title: 'walking dog2',
        content: 'walking dog in Daan park',
        subNodes: [],
        preNode: [],
        articles: [ 2 ]
      },
      {
        id: 3,
        title: 'walking dog3',
        content: 'walking dog in Daan park',
        subNodes: [],
        preNode: [ 1 ],
        articles: []
      },
      {
        id: 4,
        title: 'walking dog4',
        content: 'walking dog in Daan park',
        subNodes: [ ],
        preNode: [ ],
        articles: [ 2 ]
      },
      {
        id: 5,
        title: 'walking dog5',
        content: 'walking dog in Daan park',
        subNodes: [ ],
        preNode: [ ],
        articles: [ 1 ]
      }
    ]
  }
};
