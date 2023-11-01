import React from 'react';
import ProductCard from './ProductCard';
import '../assets/css/Product.css';
import '../assets/css/ProductCard.css'

const Product = () => {
    const products = [
        {
          image: 'https://play-lh.googleusercontent.com/APeEfCa_hcN58tXn509xSpwA-Eu9TZkFnIZ3CexA69ENRqKKu21FQ_SzaDmM-G2tTIo=w240-h480-rw',
          project_title: 'Geez Numbers',
          description: 'A numbers learning app for a geez language.',
          link: 'https://play.google.com/store/apps/details?id=com.sefed.geeznumbers',
        },
        {
          image: 'https://play-lh.googleusercontent.com/f5bD07KDWfkh66EN24ypXSPmuFjEqmy0yCkecM_cy_xMuB8311DMjEpmZn3rHGSFke-v=w240-h480-rw',
          project_title: 'Yetuga',
          description: 'A bussiness directory app in Amharic language.',
          link: 'https://play.google.com/store/apps/details?id=com.sefed.yetuga',
        },
        {
          image: 'https://sefedsystems.com/wp-content/uploads/2020/01/home_hosting_pricing_pic_4.png',
          project_title: 'Easy Race',
          description: 'Elite athlets race result management system.',
          link: 'https://sefedsystems.com/application-and-features/',
        },
        {
          image: 'https://sefedsystems.com/wp-content/uploads/2023/04/Login-1536x824.png',
          project_title: 'Sefed HMIS',
          description: 'Hospital Management Information System',
          link: 'https://sefedsystems.com/sefed-electronic-medical-record/',
        },
      ];

    return (
      <section className="products" id="product">
      <h2 className="section-title">My Products</h2>
      <div className="product__container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            project_title={product.project_title}
            description={product.description}
            link={product.link}
          />
        ))}
      </div>
    </section>
    );
};

export default Product;