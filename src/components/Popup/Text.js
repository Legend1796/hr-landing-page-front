function Text({ text }) {

  return (
    <p className={text.includes('  ') ? 'popup__text popup__text_list' : 'popup__text'}>{text}</p>
  );
}

export default Text;