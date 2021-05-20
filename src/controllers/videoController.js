const fakeUser = {
  userName: 'Eden',
  loggedIn: false, 
}

const videos = [
  {
    title: 'Movie 1',
    rating: '4',
    createdAt: '2020/5/10',
    comments: '4',
    views: '1020',
    id: 1
  },
  {
    title: 'Movie 2',
    rating: '4',
    createdAt: '2020/5/10',
    comments: '4',
    views: '59',
    id: 2
  },
  {
    title: 'Movie 3',
    rating: '4',
    createdAt: '2020/5/10',
    comments: '4',
    views: '100',
    id: 3
  },
  {
    title: 'Movie 4',
    rating: '4',
    createdAt: '2020/5/10',
    comments: '4',
    views: '1000',
    id: 4
  },
  {
    title: 'Movie 5',
    rating: '4',
    createdAt: '2020/5/10',
    comments: '4',
    views: '1',
    id: 5
  },
]

export const trending = (req, res) => res.render("home", { pageTitle: 'Home', fakeUser, videos });
export const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render('watch', { pageTitle: `Watching ${video.title}`, video, fakeUser});
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render('edit', { pageTitle: `Editing ${video.title}`, fakeUser, video});
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`)
}

export const getUpload = (req, res) => res.render('upload', { pageTitle: 'Upload Video', fakeUser });

export const postUpload = (req, res) => {
  const { title, rating } = req.body;
  videos.push({
    title,
    rating,
    createdAt: 'just now',
    comments: '0',
    views: '0',
    id: videos.length + 1,
  })
  return res.redirect('/')
}