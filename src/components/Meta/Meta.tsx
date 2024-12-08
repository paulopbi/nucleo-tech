function Meta({ title, description }: IMetaTag) {
  document
    .querySelector("[name='description']")
    ?.setAttribute('content', description)
  document.title = `NúcleoTech | ${title}`

  return <></>
}

export default Meta
