import React from 'react'
import './BlogPage.scss';



import BlogSection from '../BlogSection/BlogSection';
import PartnerSlider from '../PartnerSection/PartnerSlider';
import HeaderInner from '../Header/HeaderInner';


const BlogPage = () => {
  return (
    <>
    <HeaderInner 
      WrapperHeading="Recent Blogs"
    />
    <BlogSection 
        BlogSectionWrapper='BlogSectionWrapper'
        BlogSectionBlogbottom_img='BlogSectionBlogbottom_img'
    />
    <PartnerSlider />
    </>
  )
}

export default BlogPage
