import React from 'react'
import { ProfileHeader } from '../../components/account/ProfileHeader'
import { BasicInfoSection } from '../../components/account/BasicInfoSection'
import { PrivacySection } from '../../components/account/PrivacySection'
import { ActivitiesSection } from '../../components/account/ActivitiesSection'

const EditAccount = () => {
  const dataUser = localStorage.getItem('editPortpolio')
    ? JSON.parse(localStorage.getItem('editPortpolio'))
    : {}
  return (
    <div className="profile-editor-page">
      <ProfileHeader />

      <div className="w-[70%] mx-auto p-4 md:p-8 border rounded-lg">
        {/* Các phần chính */}
        <BasicInfoSection dataUser={dataUser} />
        <PrivacySection />
        <ActivitiesSection />

        {/* Có thể thêm một Footer hoặc nút Save/Cancel cố định ở đây */}
      </div>
    </div>
  )
}

export default EditAccount
