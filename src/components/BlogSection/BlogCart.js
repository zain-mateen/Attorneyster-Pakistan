import React from 'react'
import { Link } from 'react-router-dom';

import './BlogSection.scss';

function BlogCart(props) {
  return (
      <div className={`${props.CardClass} BlogCard_otr`}>
          <div className='BlogCard_inr'>
              <Link className='img_otr' to="/blogdetail">
                  <img className='card_img' src={props.CardImg} alt='img' />
              </Link>
              <div className='content_otr'>
                  <p className='heading-m date_text'>{props.CardDate}</p>
                  <Link className='heading-h4 card_heading' to="/blogdetail">{props.CardHeading}</Link>
                  <p className='desc heading-m'>
                    There are  of Lorem Ipsum available, but majority have su alteration in some form, by injected oir  which don't look even slightly believable.
                  </p>
                  <Link className='heading-m read_more' to="/blogdetail">
                      <span>Read More</span>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default BlogCart
