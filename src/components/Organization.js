import { Button } from "react-bootstrap";
// import { UserNavBar } from "../Common/AppNavBar";

export const OrganizationRating = () => {
  return (
    <div>
      {/* <UserNavBar /> */}
      <div className="row">
        <div className=" col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6 ">
          <h3 className="alert alert-secondary mt-2 d-flex justify-content-center">
            ORGANIZATION RATING
          </h3>

          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">ORGANIZATION NAME</th>
                <th scope="col">RATING</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                {<th scope="row">{index + 1}</th> }
                <th scope="row">1</th>
                <td>45781</td>
                <td>5</td>
                <td>02-05-2021</td>
                <td>08-05-2021</td>

                <Button variant="outline-danger" className="w-5 mt-1">
                  Cancel
                </Button>
              </tr> */}
            </tbody>
          </table>
        </div>
        <div className="col-3 col-md-3 d-none d-md-block"></div>
      </div>
    </div>
  );
};
