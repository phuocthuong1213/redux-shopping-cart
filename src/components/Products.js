import React, { Component } from 'react';

class Products extends Component {

    render() {
        var { children } = this.props;
        return (
            <div>
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        {/* Product */}
                        {children}
                    </div>
                </section>
            </div>
        )
    }
 
};

export default Products;