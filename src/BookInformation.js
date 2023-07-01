import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";


import { Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBIcon,
  MDBTextArea
}from 'mdb-react-ui-kit';


function BookInformation(){

    const [bookInfo, setBookInfo]=useState([]);
    // const [rawData, setRawData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
    const [selectedBook, setSelectedBook] = useState(null); // State to store the selected book

    
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [date, setdate] = useState("");
  const [bookType, setBookType] = useState("");
  const [prize, setPrize] = useState("");
  const [description, setdescription] = useState("");
  const [listStatus, setListStatus] = useState("");

    

    useEffect(()=>{
        axios.get('http://localhost:8081/adminBookList')
        .then(res => setBookInfo(res.data))
        .catch(err =>console.log(err));
    },[]);

    // useEffect(() => {
    //   axios.get('http://localhost:8081/adminBookList')
    //     .then(res => setBookInfo(res.data))
    //     .then(data => setRawData(data));
    // }, []);
   

    const columns = [
        {
          title: 'Book ID',
          dataIndex: 'bookId',
          key: 'bookId',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Book Name',
          dataIndex: 'bookName',
          key: 'bookName',
        },
        {
          title: 'Book Author',
          dataIndex: 'bookAuthor',
          key: 'bookAuthor',
        },
        {
          title: 'Publication Year',
          dataIndex: 'book_publication_date',
          key: 'book_publication_date',
        },
        {
          title: 'Book Type',
          dataIndex: 'bookType',
          key: 'bookType',
        },
        {
          title: 'Book Prize',
          dataIndex: 'bookPrize',
          key: 'bookPrize',
        },
        {
          title: 'Book Description',
          dataIndex: 'bookDescription',
          key: 'bookDescription',
        },
        {
          title: 'Update',
          dataIndex: '',
          key: 'update',
          render: (text, record) => <MDBBtn color='info' onClick={() => handleUpdate(record)}>
          Update
        </MDBBtn>,
        // <Link to={`update/${bookInfo.bookId}`}>Update</Link>,
        },
        {
          title: 'Delete',
          dataIndex: '',
          key: 'delete',
          render: (text, record) => <MDBBtn color='danger'  onClick={() => handleDelete(record.bookId)}>Delete</MDBBtn>,
        },
      ];

      // const handleUpdate = (book) => {
      //   setSelectedBook(book); // Store the selected book in state
      //   const selectedBookInfo = bookInfo.find(item => item.bookId === book.bookId);

      //   setBookName(book.bookName);
      //   setBookAuthor(book.bookAuthor);
      //   setdate(book.book_publication_date);
      //   setBookType(book.bookType);
      //   setPrize(book.bookPrize);
      //   setdescription(book.bookDescription);
      //   setModalOpen(true);

      //   setSelectedBook(selectedBookInfo);

       
      // };

      const handleUpdate = (book) => {
        setSelectedBook(book); // Store the selected book in state
        setBookName(book.bookName);
        setBookAuthor(book.bookAuthor);
        setdate(book.book_publication_date);
        setBookType(book.bookType);
        setPrize(book.bookPrize);
        setdescription(book.bookDescription);
        setModalOpen(true);
      };

      const handleSaveChanges = async () => {
        if (!selectedBook) return;
    
        try {
          const updatedBook = {
            ...selectedBook,
            bookName: bookName,
            bookAuthor: bookAuthor,
            book_publication_date: date,
            bookType: bookType,
            bookPrize: prize,
            bookDescription: description
          };
    
          await axios.put(`http://localhost:8081/updatebook/${selectedBook.bookId}`, updatedBook);
          setModalOpen(false);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      };

     

   const handleDelete = async (bookId) => {
  try {
    await axios.delete(`http://localhost:8081/bookshop/` + bookId);
      window.location.reload();
  } catch (err) {
    console.log(err);
  }
};


    
      return (

        
        <div>
          <Header/>
          <h1>Book Information</h1>
          <br/>
          <Link to="/create">
    <MDBBtn className='me-1' color='success'>
      Add Books
    </MDBBtn>
  </Link>

          <br/> <br/> <br/>
          <Table columns={columns} dataSource={bookInfo} />
          <MDBModal show={modalOpen} setShow={setModalOpen} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Update Book</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setModalOpen(false)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="atlas" size='lg' style={{ padding: '25px' }}/>
              <MDBInput
                label='Book Name'
                id='form1'
                type='text'
                className='w-100'
                onChange={e => setBookName(e.target.value)}
                size='lg'
              />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user" size='lg' style={{ padding: '25px' }}/>
              <MDBInput
                label='Author Name'
                id='form1'
                type='text'
                className='w-100'
                onChange={e => setBookAuthor(e.target.value)}
                size='lg'
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="calendar-alt" size='lg'style={{ padding: '25px' }} />
              <MDBInput
                label='Year'
                id='typeNumber'
                type='number'
                onChange={e => setdate(e.target.value)}
                size='lg'
                style={{ width: '100%' }} // Increase input field length
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fab icon="microsoft" size='lg'style={{ padding: '25px' }} />
              <MDBInput
                label='Book Type'
                id='form1'
                type='text'
                className='w-100'
                onChange={e => setBookType(e.target.value)}
                size='lg'
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="hand-holding-usd" size='lg' style={{ padding: '25px' }}/>
              <MDBInput
                label='Prize'
                id='typeNumber'
                type='number'
                onChange={e => setPrize(e.target.value)}
                size='lg'
                style={{ width: '100%' }} // Increase input field length
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="comment" size='lg' style={{ padding: '25px' }}/>
              <MDBTextArea
                label='Description'
                id='textAreaExample'
                rows={4}
                onChange={e => setdescription(e.target.value)}
                size='lg'
              />
            </div>

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="info" onClick={() => setModalOpen(false)}>
                Close
              </MDBBtn>
              <MDBBtn className='me-1' color='warning' onClick={handleSaveChanges}> Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    
          <Footer/>
        </div>
      );
    }
    
    export default BookInformation;