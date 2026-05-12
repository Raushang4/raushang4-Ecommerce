import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import parse, { domToReact } from 'html-react-parser';

import EmptyState from './EmptyState';
import SchemaMarkup from './SchemaMarkup';
import { authors } from '../lib/authors';

export function getContentData(category, slug) {
  const contentPath = path.join(process.cwd(), 'src/content', category, `${slug}.json`);
  
  if (!fs.existsSync(contentPath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(contentPath, 'utf8');
  return JSON.parse(fileContent);
}

export default function DynamicContentPage({ category, slug }) {
  const data = getContentData(category, slug);
  
  if (!data) {
    return <EmptyState title="Content Not Found" description={`We couldn't find the ${category} you're looking for.`} />;
  }

  const author = authors[data.authorId] || authors['rahul-mehta'];
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": category === 'blog' ? "BlogPosting" : "Article",
    "headline": data.title,
    "image": data.image || "https://www.raushang4.com/og-image.jpg",
    "author": {
      "@type": "Person",
      "name": author.name,
      "jobTitle": author.title,
      "url": author.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "raushang4 E-Commerce",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.raushang4.com/mainlogo.svg"
      }
    },
    "datePublished": data.date || "2024-01-01",
    "description": data.description
  };
  
  const options = {
    replace: (domNode) => {
      if (domNode.name === 'img') {
        const { src, alt, width, height, ...rest } = domNode.attribs;
        
        let finalSrc = src;
        if (src && (src.startsWith('_astro/') || src.startsWith('fonts/'))) {
            finalSrc = '/' + src;
        }

        const imageProps = {
          src: finalSrc,
          alt: alt || 'image',
          width: parseInt(width) || 1200,
          height: parseInt(height) || 800,
          sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        };

        Object.keys(rest).forEach(key => {
          if (key === 'class') imageProps.className = rest[key];
          else if (key === 'className') imageProps.className = rest[key];
          else if (key === 'fetchpriority') imageProps.fetchPriority = rest[key];
          else if (key === 'infersize' || key === 'inferSize') return; 
          else if (key === 'srcset') imageProps.srcSet = rest[key];
          else imageProps[key] = rest[key];
        });

        return <Image {...imageProps} />;
      }

      if (domNode.name === 'a') {
        const { href, ...rest } = domNode.attribs;
        if (href && (href.startsWith('/') || href.startsWith('.'))) {
          const linkProps = {
            href,
            ...rest
          };
          if (rest.class) {
            linkProps.className = rest.class;
            delete linkProps.class;
          }
          if (rest.className) {
            linkProps.className = rest.className;
          }
          return <Link {...linkProps}>{domToReact(domNode.children, options)}</Link>;
        }
      }
    }
  };
  
  return (
    <>
      <SchemaMarkup schema={articleSchema} />
      <main className="dynamic-content-wrap">
        {parse(data.content, options)}
        
        {/* Author Bio Section */}
        <section className="author-bio-section" style={{ borderTop: '1px solid var(--border)', marginTop: '64px', paddingTop: '48px', paddingBottom: '80px' }}>
          <div className="section-inner" style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '700', color: 'var(--accent-dark)', flexShrink: 0 }}>
                {author.name.charAt(0)}
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>{author.name}</h3>
                <p style={{ fontSize: '14px', color: 'var(--accent-dark)', fontWeight: '600', marginBottom: '12px' }}>{author.title}</p>
                <p style={{ fontSize: '15px', color: 'var(--mid)', lineHeight: '1.6' }}>{author.bio}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticParams(category) {
  const dirPath = path.join(process.cwd(), 'src/content', category);
  
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  
  const files = fs.readdirSync(dirPath);
  return files.map(file => ({
    slug: file.replace('.json', '')
  }));
}
