export const DueDate = ({date}: {date: Date}) => {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <div style={{width: "20%"}}>
      <span>{`Due Time: ${hours}:${minutes} ${day}/${month}/${year}`}</span>
    </div>
  );
};
