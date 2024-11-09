import React from 'react'

export default function DownTreeBox() {
  return (
    <section className="project-slider-wrapper section-p py-5">
        <div className="container">
          <div className="project-parent">
            <div className="project-card">
              <div className="project-content">
                <div className="title-wrap d-flex align-items-center">
                  <a className="project-title" href="/dubai/book-valuation">
                    How much is your property worth?
                  </a>
                  <i className="icon icon-arrowup-dark"></i>
                </div>
                <p>
                  Navigate the property market with confidence with the latest Dubai Land Department sales and lettings
                  data at your fingertips.
                </p>
              </div>
              <div className="tile-img img-hover scalImg">
                <a
                  aria-label="How much is your property worth? - Image"
                  href="/dubai/book-valuation"
                >
                  <img
                    alt="How much is your property worth?"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    src="https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2FLifestyle_content_1cc78ec547.jpg&w=1920&q=75"
                  />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <div className="title-wrap d-flex align-items-center">
                  <a className="project-title" href="/dubai/about-us/news-videos">
                    Allsopp &amp; Allsopp TV
                  </a>
                  <i className="icon icon-arrowup-dark"></i>
                </div>
                <p>
                  Watch the latest episode of our Taking Care of Business podcast.
                </p>
              </div>
              <div className="tile-img img-hover scalImg">
                <a
                  aria-label="Allsopp &amp; Allsopp TV - Image"
                  href="/dubai/about-us/news-videos"
                >
                  <img
                    alt="Allsopp &amp; Allsopp TV"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    src="https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2FLifestyle_content_4_b99e470379.jpg&w=1920&q=75"
                  />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <div className="title-wrap d-flex align-items-center">
                  <a className="project-title" href="/dubai/about-us/news-videos">
                    Latest News
                  </a>
                  <i className="icon icon-arrowup-dark"></i>
                </div>
                <p>
                  The latest news and highlights from Dubai's real estate market.
                </p>
              </div>
              <div className="tile-img img-hover scalImg ">
                <a
                  aria-label="Latest News - Image"
                  href="/dubai/about-us/news-videos"
                >
                  <img
                    alt="Latest News"
                    loading="lazy"
                    decoding="async"
                    className="img-fluid scalImg "
                    src="https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2FLifestyle_content_6_d666ec7603.jpg&w=1920&q=75"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
