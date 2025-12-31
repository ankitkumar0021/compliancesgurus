import React from 'react'
import IdprHome from '../../components/blog/idpr-records/IdprHome'
import BlogIntroWithImage from '@/app/components/blog/idpr-records/BlogIntroWithImage'
import IDPRContent from '@/app/components/blog/idpr-records/IDPRContent'

export default function page() {
  return (
    <div>
        <IdprHome />
        <BlogIntroWithImage />
        <IDPRContent />
    </div>
  )
}
