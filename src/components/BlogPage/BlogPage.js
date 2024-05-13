import React, { Fragment } from 'react'

import BlogSection from '../BlogSection/BlogSection';
import PartnerSlider from '../PartnerSection/PartnerSlider';
import HeaderInner from '../Header/HeaderInner';

import './BlogPage.scss';

const BlogPage = () => {
  return (
    <Fragment>
      <HeaderInner 
        WrapperHeading="Recent Blogs"
      />
      <BlogSection 
          BlogSectionWrapper='BlogSectionWrapper'
          BlogSectionBlogbottom_img='BlogSectionBlogbottom_img'
      />
      <PartnerSlider />
    </Fragment>
  )
}

export default BlogPage
