const staticImage = 'https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1'

export const Avatar = () => {
  return (
    <div className="relative">
      <img className="size-[35px] rounded-full" src={staticImage} alt="User image" />
    </div>
  )
}
