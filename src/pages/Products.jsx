import React from "react";
import $ from "jquery/dist/jquery";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      act: 0,
      products: [
        {
          id: "1",
          name: "Product Name",
          rate: "23",
          quality: "3",
        },
        {
          id: "2",
          name: "Product Name",
          rate: "5",
          quality: "7",
        },
        {
          id: "3",
          name: "Product Name",
          rate: "12",
          quality: "8",
        },
        {
          id: "4",
          name: "Product Name",
          rate: "55",
          quality: "3",
        },
        {
          id: "5",
          name: "Product Name",
          rate: "122",
          quality: "5",
        },
        {
          id: "6",
          name: "Product Name",
          rate: "50",
          quality: "7",
        },
      ],
    };
  }
  deleteProduct(id) {
    const newList = this.state.products.filter((item) => item.id !== id);
    this.setState({ products: newList });
  }

  fSubmit = (e) => {
    e.preventDefault();

    let addProdut = this.state.products;
    let id = "id-" + Math.floor(Math.random() * 100) + 1;
    let name = this.refs.name.value;
    let rate = this.refs.rate.value;
    let quality = this.refs.quality.value;

    if (this.state.act === 0) {
      //new
      let data = {
        id,
        name,
        rate,
        quality,
      };
      addProdut.push(data);
    } else {
      //update
      let index = this.state.index;
      addProdut[index].name = name;
      addProdut[index].rate = rate;
      addProdut[index].quality = quality;
    }

    this.setState({
      produta: addProdut,
      act: 0,
    });
    console.log(this.state.datas);
    this.refs.myForm.reset();
    $("#exampleModal").modal("hide");
  };
  closeModal(e) {
    this.refs.myForm.reset();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-5 pagename">
            <h1>Products</h1>
          </div>
          <button
            type="button"
            className="btn btn-primary float-right"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add Product
          </button>
          <div className="row mt-5">
            <div className="col-md-12 products-list">
              <table className="table">
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Product Name</th>
                    <th>Rate</th>
                    <th>Quality</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.rate}</td>
                      <td>{product.quality}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={() => this.deleteProduct(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          className="modal fade  bd-example-modal-lg"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog  modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Product
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => this.closeModal(e)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form ref="myForm" className="myForm">
                  <div className="form-group">
                    <label htmlFor="productName">Email address</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      id="productName"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productRate">Rate</label>
                    <input
                      type="number"
                      ref="rate"
                      className="form-control"
                      id="productRate"
                      placeholder="Rate"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productQuality">Quality</label>
                    <input
                      type="number"
                      ref="quality"
                      className="form-control"
                      placeholder="Quality"
                      id="productQuality"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={(e) => this.closeModal(e)}
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={(e) => this.fSubmit(e)}
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
