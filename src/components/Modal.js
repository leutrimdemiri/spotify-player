import React from "react";
import '../Modal.css';

class Modal extends React.Component {
    render () {
      return (
<div class="modal fade" id="addplaylist" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Create Playlist</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span><ion-icon name="close-outline"></ion-icon></span>
        </button>
      </div>
      <div class="modal-body">
     <form action="<?=$_SERVER['PHP_SELF']?>" method="post" enctype="multipart/form-data">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-4 d-flex justify-content-center align-self-center">
              <div class="playlist-cover">
                <div class="cover-hero">
                  <input type='file' name="cover_art" id="CoverUpload" accept=".png, .jpg, .jpeg, .gif" />
                  <label for="CoverUpload"></label>
                </div>
                <div class="cover-preview">
                  <div id="CoverPreview">
                    <div id="info">
                      <div class="text-center">
                      <span style={{width: "100px", height:"100px"}} data-feather="music"></span>
                      <p>Choose Image</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-md-8">

              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" name="title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="My Playlist #1"/>
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Description</label>
                <textarea rows="4" type="text" name="description" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Give your playlist a catchy description"></textarea>
              </div>

            </div>
          </div>
        </div>
     
      <div class="modal-footer justify-content-center">
        <button type="submit" class="btn btn-primary btn-sm rounded-pill">Create playlist</button>
      </div>
      </form>
    </div>
  </div>

</div>
</div>
);
  }
}
export default Modal;
  