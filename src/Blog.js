import React, { useEffect, useState, useContext } from 'react';
import DivContainer from './divContainer';
import { IsMobileViewContext } from './contexts/Theme.context';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import uuidv4 from 'uuid/v4';
import Popup from './Popup';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
    Pagination: {
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom:'0.5rem',
        // padding: '10px',
        width: '50%',
    },
    PagesPagination: {
        // padding: '30px',
        listStyleType: 'none',
        cursor: 'pointer'
        
        
        // margin: '30px',
        // flex: '0 1 auto'
    },
    breakMe: {
        color:'red'
    },
    linkStyle: {
        textDecoration: 'none',
        display: 'block',
        padding: '10px',
        width: '20px'
    },
    previousBtn: {
        textDecoration: 'none',
        listStyleType: 'none',
        cursor: 'pointer',

    },
    nextBtn: {
        listStyleType: 'none',
        cursor: 'pointer',
        marginLeft: '10px'
    },
    active: {
        color: 'grey'
    },
    button: {
        alignSelf: 'center',
        padding: theme.spacing(0.2, 0.5),
    },
    //blogsContainer

    allblogContainer: {
        display: 'flex',
        height: '90%',
        width: '100%',
        flexDirection: 'column',
    },
    blogContainer: {
        width: '80%',
        // height: `calc(20%) - (40/5)px`,
        flex: '1 1 auto',   
        marginLeft: '50%',
        transform: "translate(-50%)",
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        padding: theme.spacing(0, 1),
        transition: 'transform 0.3s',
         [theme.breakpoints.down('xs')]: {
            //   height: '20%',
             // width: '100%',
        }
    },
    description: {
        // maxWidth: '1000px',
        // lineHeight: '1',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        // numberOfLines:'3'
        // display: '-webkit-box',
        // lineHeight: '16px', /* fallback */
        // maxHeight: '32px', /* fallback */ 
        // webkitLineClamp: 2, /* number of lines to show */ 
        // webkitBoxOrient: 'vertical',

    },
    blogHeading: {
        width: '70%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
         [theme.breakpoints.down('xs')]: {
             fontSize: '1.5rem'
         },
    },
    date: {
        position: 'absolute',
        right: '0.2rem',
        top: '0.2rem'
    },
    author: {
        position: 'absolute',
        right: '1rem',
        bottom: '1rem'
    }

    }));



function Blog(props) {
    const [blogData, setBlogData] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setlimit] = useState(5);
    const [blogCount, setBlogCount] = useState(0);
    const { isMobile, IsTablet } = useContext(IsMobileViewContext);
    const [val] = useState('<h1>Hello</h1>');

    let letters = isMobile ? 20 : 100;


    const classes = useStyles();

    const truncate = function (str) {
        return str.length > 50 ? str.substring(0, letters) + '<h1>val</h1>' : str;
    }

    useEffect(() => {
        blogDataRequest();
    }, [page])

    const blogDataRequest = async () => {
        axios.get('http://localhost:8080/api/articles', {
            params: {
                page,
                limit
            }
        })
        .then(function (response) {
                console.log(response.data);
                //  console.log(response.config);
                let d = [];
                response.data.articles.map(article => {
                    // setBlogData([...blogData])
                    const date = new Date(article.createdAt);
                    const day = date.getDate();
                    const month = date.getMonth();
                    const year = date.getFullYear();
                    const dateCreated = `${day}/${month}/${year}`   
                    d = [...d, {
                        title: article.title,
                        author: article.author,
                        description: article.description,
                        createdAt: dateCreated
                    }]
                })
            setBlogData(d);
            setBlogCount(response.data.count)
            console.log(d);
        }).then(function (err) {
            if (err) {
                alert(err)
            }
            })
    }

    const handlePageClick =(e) => {
        setPage(e.selected);
    }

    const shortDescrip = (el) => {
        //   var el = document.getElementById(id);
        //   var wordArray = el.innerHTML.split(' ');
        //   while (el.scrollHeight > el.offsetHeight) {
        //       wordArray.pop();
        //       el.innerHTML = wordArray.join(' ') + '...';
        //   }
        // console.log(el.innerHTML);
        

    }
    const displayBlog = blogData.map((blog) => (
        <Paper key={uuidv4()} className={classes.blogContainer}>
        < Typography variant="h4" component="h5" gutterBottom className={classes.blogHeading} > { blog.title }</Typography >
        < Typography variant="body2" gutterBottom className={classes.description}> {(blog.description)}</Typography >
            <Typography variant="subtitle2" gutterBottom className={classes.author}> {blog.author}</Typography>
            <Typography variant="caption" className={classes.date} gutterBottom> {blog.createdAt}</Typography>
        {/* <Button variant="contained" color="default" className={classes.button} size="small" >
            Read More
        </Button> */}
            <Popup title={blog.title} description={blog.description}/>
        </Paper>
       ))
      return (
        <DivContainer>
                <div className={classes.allblogContainer}>
                  {displayBlog}
                </div>
         <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={classes.breakMe}
          pageCount={Math.ceil(blogCount/limit)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={classes.Pagination}
          pageClassName={classes.PagesPagination}
          pageLinkClassName={classes.linkStyle}
        //   subContainerClassName={classes.PagesPagination}
          activeClassName={classes.active}
          previousClassName={classes.previousBtn}
          nextClassName={classes.nextBtn}
        />
      </DivContainer>
        );

}

export default Blog;