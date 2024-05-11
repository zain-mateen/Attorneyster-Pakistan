import React from 'react'
import './BlogSection.scss';
import { Link } from 'react-router-dom';
import BlogCart from './BlogCart.js';


import Icon from '../../img/icon2.svg';
import BlogImage1 from '../../img/blog-section-img1.png';
import BlogImage2 from '../../img/blog-section-img2.png';
import BlogImage3 from '../../img/blog-section-img3.png';
import BlogImage4 from '../../img/blog-section-img4.png';
import BlogImage5 from '../../img/blog-section-img5.png';
import BlogImage6 from '../../img/blog-section-img6.png';
import BlogImage7 from '../../img/blog-section-img7.png';
import BlogBottomImage from '../../img/blog-bottom-img.png';



function BlogSection(props) {
  return (
    <section className='BlogSection'>
        <div className='container'>
            <div className='upper_blog'>
                <div className={`${props.BlogSectionWrapper} wrapper`}>
                    <h2 className='heading heading-h2'>Recent Blogs</h2>
                    <img className='icon' src={Icon} alt='Icon' />
                </div>
                <div className='row row_custom'>
                    <div className='col-lg-5 col_img_otr'>
                        <Link className='col_img_inr' to='/blogdetail'>
                            <img className='img' src={BlogImage1} alt='Blog Section' />
                        </Link>
                    </div>
                    <div className='col-lg-7 col_content_otr'>
                        <div className='col_content_inr'>
                            <p className='text heading-m'> Criminal Law, Kidnapping   |   Sunday, July 24, 2022   </p>
                            <Link className='heading heading-h2' to='/blogdetail'>An Independent Examination Of Charity Accounts</Link>
                            <p className='desc heading-m'>
                                There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable.
                            </p>
                            <div className='action_otr'>
                                <Link className='Read_btn heading-l' to='/blogdetail'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row_custom2'>
                <BlogCart 
                    CardClass="col-lg-4 col-md-6 col-sm-6"
                    CardImg={BlogImage2}
                    CardDate="Legal Advice   |   Sunday, July 24, 2022"
                    CardHeading="Prevent A Further Breach of The Peace In The States"
                />
                <BlogCart 
                    CardClass="col-lg-4 col-md-6 col-sm-6"
                    CardImg={BlogImage3}
                    CardDate="Legal Advice   |   Friday, August 15, 2022"
                    CardHeading="Failing to Carry Out The Terms of A Business Contract"
                />
                <BlogCart 
                    CardClass="col-lg-4 col-md-6 col-sm-6"
                    CardImg={BlogImage4}
                    CardDate="Legal Advice   |   Sunday, July 24, 2022   "
                    CardHeading="How Legal Professionals Work: The Defense Objects In The Event"
                />
                <BlogCart 
                    CardClass="col-lg-4 col-md-6 col-sm-6"
                    CardImg={BlogImage5}
                    CardDate="Legal Advice   |   Sunday, July 24, 2022 "
                    CardHeading="Riding solo to the rescue of her beloved nonprofits"
                />
                <BlogCart 
                    CardClass="col-lg-4 col-md-6 col-sm-6"
                    CardImg={BlogImage6}
                    CardDate="Legal Advice   |   Friday, August 15, 2022"
                    CardHeading="Case Filed on Behalf of Injured Tugboat Worker"
                />
                <BlogCart 
                    CardClass="col-lg-4 col-md-6 col-sm-6"
                    CardImg={BlogImage7}
                    CardDate="Legal Advice   |   Sunday, July 24, 2022   "
                    CardHeading="How Companies Choose Legal Representation"
                />
            </div>
        </div>
        <img className={`${props.BlogSectionBlogbottom_img} Blogbottom_img`} src={BlogBottomImage} alt='Blog img' />
    </section>
  )
}

export default BlogSection
