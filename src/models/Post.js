import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this post.'],
        maxlength: [60, 'Title cannot be more than 60 characters'],
    },
    slug: {
        type: String,
        required: [true, 'Please provide a slug for this post.'],
        unique: true,
    },
    content: {
        type: String,
        required: [true, 'Please provide the content for this post.'],
    },
    image: {
        type: String,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
