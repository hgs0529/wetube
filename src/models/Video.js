import mongoose from "mongoose";

//solution 2 make a functions
// export const formatHashtags = (hashtags) => {
//   return hashtags
//     .split(",")
//     .map((tag) => (tag.startsWith("#") ? `${tag}` : `#${tag}`));
// };

const videoSchema = new mongoose.Schema({
  videoUrl: { type: String, require: true },
  title: { type: String, require: true, trim: true, maxLength: 20 },
  description: { type: String, require: true, minLength: 10, trim: true },
  hashtags: [{ type: String }],
  createdAt: { type: Date, default: Date.now, require: true },
  meta: {
    views: { type: Number, default: 0, require: true },
    rting: { type: Number, default: 0, require: true },
  },
  owner: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "User" },
});

videoSchema.static("formatHashtags", (hashtags) =>
  hashtags.split(",").map((tag) => (tag.startsWith("#") ? `${tag}` : `#${tag}`))
);

// solution 1 middleware
// videoSchema.pre("save", async function () {
//   this.hashtags = this.hashtags[0]
//     .split(",")
//     .map((word) => (word.startsWith("#") ? `${word}` : `#${word}`));
// });

const Video = mongoose.model("Video", videoSchema);

export default Video;
