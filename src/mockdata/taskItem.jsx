import { v4 as uuidv4 } from "uuid";
const taskItem = [
    {
        id: uuidv4(),
        Taskname: "Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết",
        level: "2" // high
    },
    {
        id: uuidv4(),
        Taskname: "Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018",
        level: "0" // low
    },
    {
        id: uuidv4(),
        Taskname: "Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo",
        level: "1" // medium
    },
    {
        id: uuidv4(),
        Taskname: "Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết",
        level: '1' // low
    },
    {
        id: uuidv4(),
        Taskname: "VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết",
        level: "2" // high
    },
    {
        id: uuidv4(),
        Taskname: "F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020",
        level: "2" // medium
    }
];

export default taskItem;