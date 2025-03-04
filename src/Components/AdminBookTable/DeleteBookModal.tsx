import React from "react";
import { Book, BookContextInterface } from "../../@types/book";
import { BookContext } from "../../context/BookContextProvidor";

interface DeleteModalProps {
    book: Book;
    onClose: () => void;
  }

const DeleteModal: React.FC<DeleteModalProps> = ({ book, onClose }) => {
    const { removeBook } = React.useContext(
        BookContext
      ) as BookContextInterface;


    return (
      <div
        className="modal"
        tabIndex={-1}
        role="dialog"
        id="deleteModal"
        aria-labelledby="deleteModalLabel"
        style={{ display: 'block' }} // Ensure the modal is visible
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                Are you sure you want to delete {book.title} ({book.id})?
              </h5>
              <button
                type="button"
                className="close"
                onClick={onClose}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>If you delete, this book will be gone forever.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  removeBook(book.id);
                  onClose();
                }}
              >
                Yes, Delete Forever
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                No, Keep Book
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteModal;