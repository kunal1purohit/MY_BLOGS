import React from 'react'
import service from '../appwrite/config'
import { Container,PostForm } from '../comp'
import { useNavigate,useParams } from 'react-router-dom'

function Editpost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div> ) : null
}

export default Editpost
