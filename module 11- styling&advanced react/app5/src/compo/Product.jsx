import React from 'react';

function Product(props) {
    return (
        <>
            <div className="container-fluid product p-4">
                <div className="row">
                    <div className="col d-flex">
                        <h2>Featured Categories</h2>
                        <ul className='d-flex'>
                            <li><a href="#">Cake & Milk</a></li>
                            <li><a href="#">Coffes & Teas</a></li>
                            <li><a href="#">Pet Foods</a></li>
                            <li><a href="#">Vegetables</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row text-center d-flex justify-content-between">
                    <div className="col-1">
                        <div class="card">
                            <img src="img/item6.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Red apples</h5>
                                <p class="card-text">26 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/item3.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Snaks</h5>
                                <p class="card-text">26 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/item1.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Vegitables</h5>
                                <p class="card-text">26 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/item2.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Strawberry</h5>
                                <p class="card-text">26 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/item4.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Black Plum</h5>
                                <p class="card-text">26 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/item5.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Custard apple</h5>
                                <p class="card-text">26 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/item9.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Coffee tea</h5>
                                <p class="card-text">26 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/item10.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Headphone</h5>
                                <p class="card-text">26 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/item8.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Cake milk</h5>
                                <p class="card-text">26 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/item7.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Oganic kiwi</h5>
                                <p class="card-text">26 items</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Product;