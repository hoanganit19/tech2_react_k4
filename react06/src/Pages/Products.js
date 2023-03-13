import React, { Component } from "react";
import { withRouter } from "../Services/withRouter";
import { useSearchParams } from "react-router-dom";

// export class Products extends Component {
//   constructor(props) {
//     super(props);
//   }

//   handleOrder = () => {
//     const { navigate } = this.props;
//     navigate("/thanh-cong");
//   };

//   render() {
//     console.log(window.location);
//     const search = new URLSearchParams(window.location.search);
//     console.log(search.get("keyword"));
//     console.log(search.get("category"));
//     return (
//       <div>
//         <h1>Products</h1>
// <form>
//   <div className="row">
//     <div className="col-3">
//       <select name="status" className="form-control" id="">
//         <option value="all">Tất cả trạng thái</option>
//         <option value="active">Kích hoạt</option>
//         <option value="deactive">Chưa kích hoạt</option>
//       </select>
//     </div>
//     <div className="col-7">
//       <input
//         type="search"
//         className="form-control"
//         placeholder="Từ khóa tìm kiếm..."
//         name="query"
//       />
//     </div>
//     <div className="col-2 d-grid">
//       <button type="submit" className="btn btn-primary">
//         Tìm kiếm
//       </button>
//     </div>
//   </div>
// </form>
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={this.handleOrder}
//         >
//           Đặt hàng
//         </button>
//       </div>
//     );
//   }
// }

// export default withRouter(Products);

const Products = () => {
  const [search, setSearchParams] = useSearchParams();
  console.log(search.get("status"));
  console.log(search.get("query"));
  console.log(search.getAll("category"));
  console.log(search.toString());

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = e.target.querySelector('[name="status"]').value;
    const query = e.target.querySelector('[name="query"]').value;

    const params = {};
    if (query.trim().length) {
      params.query = query;
    }

    if (status !== "all") {
      params.status = status;
    }

    setSearchParams(params);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-3">
          <select
            name="status"
            className="form-select"
            id=""
            defaultValue={search.get("status") ?? ""}
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="active">Kích hoạt</option>
            <option value="deactive">Chưa kích hoạt</option>
          </select>
        </div>
        <div className="col-7">
          <input
            type="search"
            className="form-control"
            placeholder="Từ khóa tìm kiếm..."
            name="query"
            defaultValue={search.get("query")}
          />
        </div>
        {/* <div className="col-2 d-grid">
          <button type="submit" className="btn btn-primary">
            Tìm kiếm
          </button>
        </div> */}
      </div>
    </form>
  );
};

export default Products;
