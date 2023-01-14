import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Blog from '../Blog';
import BLOG_TAGS from '../BlogTags';

const NewArticle = ({ httpClient }) => {
    const blogRef = useRef();
    const [list, setList] = useState([{
        tag: 'p',
        content: '',
        title: 'Paragraph'
    }]);
    const queryClient = useQueryClient();

    // const { isLoading, error, response } = useQuery('newArticleData', () =>
    //     httpClient.post('/api/article/create'),{ 
    //         refetchOnWindowFocus: false 
    //     }
    // );

    const blog = new Blog(0);
    const uploadBanner = e => {
        console.log(e.target.value);
    }

    const addTagToBlog = e => {
        const target = e.target;
        const tag = target.getAttribute('data-tag') ?? 'div';
        setList(s => ([...s, {
            tag, content: ''
        }]))
    }

    const handleRemove = (i) => {
        setList(s => {
            return s.filter((it, idx) => idx !== i);
        });
    }

    const handleInput = e => {
        const target = e.target;
        const idx = target.getAttribute('data-idx');
        setList(s => {
            const fn = s.find((it, i) => i == idx);
            fn.content = target.value;
            return [...s];
        })
    }

    // if (isLoading) return <h3>Loading...</h3>

    // if (error) return 'An error has occurred: ' + error?.message

    return ( 
        <Row className='mx-0'>
            <Col sm={9} className='px-1 blog-side' ref={blogRef}>
                <div className='blog-banner'>
                    <Form.Control name='bio' className='mb-3 fs-3' defaultValue="Blog Title Here..." required />
                    <Form.Control type='file' accept='image/jpg, image/png, image/jpeg' className='d-none' id='banner' onChange={uploadBanner} />
                    <label htmlFor='banner'>upload banner</label>
                </div>
                {
                    list.map((l, i) => {
                        return (
                            <Card key={i} className='my-2'>
                                <Card.Header className='px-2 d-flex justify-content-between align-items-center'>
                                    <span>{l.title ?? "Heading"}</span>
                                    <i className="bi bi-archive" onClick={e => handleRemove(i)}></i>
                                </Card.Header>
                                <Card.Body className='p-0' >
                                    <Form.Control onInput={handleInput} data-idx={i}
                                        className={`p-1`} as="textarea" value={l.content}
                                        placeholder="type here..." required
                                    />
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Col>
            <Col sm={3} className='border-start border-secondary px-0'>
                <div className='side-flex'>
                    <Button data-tag='h' onClick={addTagToBlog} size='md' variant='outline-secondary'>P</Button>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            H
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {
                        BLOG_TAGS.map(tag => {
                            if (tag.children.length === 0) {
                                return <Button className='fw-bold' data-tag={tag.tag} onClick={addTagToBlog} size='md'
                                    variant='outline-secondary'>{tag.tag.toUpperCase()}</Button>
                            } else {
                                return  <Dropdown>
                                            <Dropdown.Toggle className='fw-bold' variant="outline-secondary" id="dropdown-basic">
                                                {tag.tag.toUpperCase()}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                            }
                        })
                    }
                </div>
            </Col>
        </Row>
     );
}
 
export default NewArticle;