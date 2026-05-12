import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "Digital Marketing &amp; Growth Blog | Web Impetus",
  description: "Insights on D2C ecommerce growth, CRO, performance marketing, SEO, analytics, and AI search from the Web Impetus team in India.",
};

export default function BlogPage() {
  return (
    <>
      <section className="blog-hero"> <div className="blog-eyebrow">Blog</div> <h1>Thinking out loud <em>about growth.</em></h1> <p>Strategy, performance, and the systems that make D2C brands grow. No filler.</p> </section> <section className="blog-body"> <div className="blog-inner"> <a className="featured-post" href="../webimpetus.com/blog/why-your-small-business-needs-a-web-presence.html"> <div className="featured-img-wrap"> <Image src="https://cdn.sanity.io/images/zcj1brqz/production/e360f4ef3cd463535501b8b29facc6c9145b5092-380x265.heif?w=1200&#38;auto=format" srcSet="https://cdn.sanity.io/images/zcj1brqz/production/e360f4ef3cd463535501b8b29facc6c9145b5092-380x265.heif?w=600&#38;auto=format 600w, https://cdn.sanity.io/images/zcj1brqz/production/e360f4ef3cd463535501b8b29facc6c9145b5092-380x265.heif?w=900&#38;auto=format 900w, https://cdn.sanity.io/images/zcj1brqz/production/e360f4ef3cd463535501b8b29facc6c9145b5092-380x265.heif?w=1200&#38;auto=format 1200w, https://cdn.sanity.io/images/zcj1brqz/production/e360f4ef3cd463535501b8b29facc6c9145b5092-380x265.heif?w=1600&#38;auto=format 1600w" sizes="(max-width: 768px) 100vw, 616px" alt="Why your Small Business needs a Web Presence" fetchPriority="high" width={1200} height={800} style={{ objectFit: "cover" }} /> </div> <div className="featured-body"> <div className="featured-badge">Latest Post</div> <div className="featured-meta"> <span className="post-cat">Design</span> <span className="post-date">19 Jun 2020</span> <span className="post-reading">10 min read</span> </div> <div className="featured-title">Why your Small Business needs a Web Presence</div> <p className="featured-excerpt">Did you know…

Small and medium businesses (SMBs) account for 37 percent of India’s GDP and employ more than 120 million people.</p> <div className="featured-footer"> <span className="post-author">By Tushar Tyagi</span> <span className="post-link">
Read article
<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </span> </div> </div> </a> </div> </section> 
    </>
  );
}
