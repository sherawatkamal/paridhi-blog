import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Clock, Calendar, Tag, User, MessageCircle, Heart, Share2 } from 'lucide-react';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === parseInt(id));
    setPost(foundPost);
    if (foundPost) {
      setLikes(foundPost.likes || 0);
    }
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      // In a real app, this would be sent to a backend
      console.log('New comment:', newComment);
      setNewComment('');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Post not found
          </h1>
          <Link
            to="/blog"
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
          >
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/blog" className="hover:text-purple-600 dark:hover:text-purple-400">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Featured Image */}
          <div className="aspect-video overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Category and Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200">
                {post.category}
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:dark:text-white prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-strong:text-gray-900 prose-strong:dark:text-white prose-ul:text-gray-700 prose-ul:dark:text-gray-300 prose-li:text-gray-700 prose-li:dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Actions */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    liked
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                  {likes} {likes === 1 ? 'like' : 'likes'}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                  <MessageCircle className="w-4 h-4" />
                  {post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Comments ({post.comments.length})
          </h3>

          {/* Comment Form */}
          <form onSubmit={handleComment} className="mb-8">
            <div className="mb-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts..."
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Post Comment
            </button>
          </form>

          {/* Comments List */}
          {post.comments.length > 0 ? (
            <div className="space-y-6">
              {post.comments.map((comment) => (
                <div key={comment.id} className="border-l-4 border-purple-200 dark:border-purple-800 pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {comment.author}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(comment.date)}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No comments yet. Be the first to share your thoughts!
            </p>
          )}
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/post/${relatedPost.id}`}
                  className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
