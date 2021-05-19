export const trending = (req, res) => res.render("home")

export const see = (req, res) => res.render('watch');

export const edit = (req, res) => res.send ('Edit Video');

export const search = (req, res) => res.send('search video');

export const upload = (req, res) => res.send('Upload');

export const deleteVideo = (req, res) => res.send('Delete Video');