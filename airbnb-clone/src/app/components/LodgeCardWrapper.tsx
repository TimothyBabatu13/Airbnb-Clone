const LodgeCardWrapper = ({ children } : {
    children: React.ReactNode
}) => {
  return (
    <div className=" lodge_card_wrapper grid gap-10">
        {children}
    </div>
  )
}

export default LodgeCardWrapper