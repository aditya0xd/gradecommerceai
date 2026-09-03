import { motion } from "framer-motion";
import { PenLine, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOGS, type FeaturedBlogItem, type RegularBlogItem } from "./blogs.constants";

const BlogsContent = () => {
  const featuredBlog = BLOGS[0] as FeaturedBlogItem;
  const sideBlogs = BLOGS.slice(1) as RegularBlogItem[];

  return (
    <section id="blog" className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-primary-700/10 text-primary-600 border border-primary-700/15 mb-5 tracking-[0.02em]"
            >
              <PenLine className="w-3.5 h-3.5" /> Blog
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text"
            >
              Latest Insights &<br />
              <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
                Engineering Articles
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold bg-transparent text-text border border-border2 transition-all hover:border-primary-700 hover:bg-primary-700/5 hover:-translate-y-0.5"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-6">
          {/* Featured Blog */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:border-border2 cursor-pointer group flex flex-col"
          >
            <div className="relative overflow-hidden aspect-[16/9] sm:aspect-auto sm:flex-1">
              <img
                src={`https://picsum.photos/seed/${featuredBlog.img}/800/450.jpg`}
                alt={featuredBlog.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex gap-2 mb-3">
                {featuredBlog.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
                    style={{
                      color: featuredBlog.tagColors[i],
                      backgroundColor: `${featuredBlog.tagColors[i]}15`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-[20px] sm:text-[24px] font-bold mb-3 leading-[1.3] text-text">
                {featuredBlog.title}
              </h3>
              <p className="text-text2 text-[14px] sm:text-[15px] leading-[1.7] mb-5 line-clamp-2">
                {featuredBlog.desc}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${featuredBlog.authorImg}/60/60.jpg`}
                  alt={featuredBlog.author}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <span className="block text-[14px] font-semibold text-text">
                    {featuredBlog.author}
                  </span>
                  <span className="block text-[12px] text-text2">
                    {featuredBlog.date}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Blogs */}
          <div className="flex flex-col gap-4">
            {sideBlogs.map((blog, i) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:border-border2 cursor-pointer flex flex-row group"
              >
                <div className="w-[110px] sm:w-[140px] shrink-0 overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${blog.img}/300/200.jpg`}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
                  <div>
                    <span
                      className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded"
                      style={{
                        color: blog.tagColor,
                        backgroundColor: `${blog.tagColor}15`,
                      }}
                    >
                      {blog.tag}
                    </span>
                  </div>
                  <h4 className="text-[14px] sm:text-[15px] font-bold mt-2 leading-[1.3] text-text line-clamp-2">
                    {blog.title}
                  </h4>
                  <span className="block text-[12px] text-text2 mt-2">
                    {blog.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsContent;
