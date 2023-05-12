import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { FC, useState } from 'react'
import StoriesComponent from './StoriesComponent'
import disney from '../assets/disney.jpg'
import scott from '../assets/scott.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faPaperPlane, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'

const PostComponent: FC = () => {
  const [posts, setPosts] = useState([
    {
      ProfilePicture: disney,
      Username: 'Walt',
      Image: scott,
      NumOfLikes: '6,503',
      Description: 'Awesome Description',
      Comments: [
        {
          UserWhoCommented: 'Scotterpop_11',
          UsersComment: 'Awesome Comment'
        },
      ],
    },
    {
      ProfilePicture: scott,
      Username: 'Scotterpop_11',
      Image: disney,
      NumOfLikes: '6,503',
      Description: 'Awesome Description',
      Comments: [
        {
          UserWhoCommented: 'Walt',
          UsersComment: 'Awesome Comment'
        },
      ],
    },
  ])

  return (
    <ScrollView style={{ flex: 1}}>
      <StoriesComponent />
      {posts.map((post, idx) => {
        return(
          <>
            <View style={styles.ProfileNav}>
              <View style={{ paddingTop: 10 }}>
                <Image source={post.ProfilePicture} style={styles.ImageStyle} />
              </View>
              <View style={styles.ProfileUsername}>
                <Text style={styles.UsernameText}>{post.Username}</Text>
              </View>
              <View style={styles.DotsView}>
                <Text style={styles.DotsText}>...</Text>
              </View>
            </View>
            <View>
              <Image source={post.Image} style={styles.ImagePost} />
            </View>
            <View style={styles.LikeView}>
              <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingLeft: 14 }}>
                <FontAwesomeIcon icon={faHeart} style={{ color: 'white', marginRight: 15 }} size={25} />
                <FontAwesomeIcon icon={faComment} style={{ color: 'white', marginRight: 15, transform: [{rotateY: '180deg'}] }} size={25} />
                <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'white', marginRight: 15 }} size={25} />
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 14, paddingTop: 10}}>
                <FontAwesomeIcon icon={faBookmark} style={{ color: 'white', marginRight: 15 }} size={25} />
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row'}}>
                <Text style={{ color: 'white', fontWeight: 'bold', paddingLeft: 14, paddingTop: 5}}>{post.NumOfLikes} likes</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row'}}>
                <Text style={{ color: 'white', fontWeight: 'bold', paddingLeft: 14, paddingTop: 5, paddingRight: 5}}>{post.Username}</Text>
                <Text style={{ color: 'white', paddingTop: 5}}>{post.Description}</Text>
            </View>
            {post.Comments.map((comment, idx) => {
              return (
                <View style={{ flex: 1, flexDirection: 'row'}}>
                  <Text style={{ color: 'gainsboro', paddingLeft: 14, paddingTop: 5, fontWeight: 'bold'}}>{comment.UserWhoCommented}</Text>
                  <Text style={{color: 'gainsboro', paddingLeft: 5, paddingTop: 5}}>{comment.UsersComment}</Text>
                </View>
              )
            })}
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={scott} style={{ height: 30, width: 30, borderRadius: 50, marginTop: 10, marginLeft: 14}} />
              <Text style={{color: 'gainsboro', alignSelf: 'center', paddingLeft: 14, paddingTop: 5}}>Add a comment...</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row'}}>
              <Text style={{color: 'gainsboro', paddingLeft: 14, paddingTop: 5, paddingBottom: 5}}>12 Hours ago</Text>
            </View>
          </>
        )
      })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  ProfileNav: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  UsernameText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  ProfileUsername: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 10
  },
  DotsText: {
    color: 'white',
    fontSize: 30
  },
  DotsView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  },
  ImagePost: {
    width: '100%',
    height: 400
  },
  LikeView: {
    flexDirection: 'row'
  }
})

export default PostComponent