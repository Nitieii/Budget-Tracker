const GET = (id) => {
  return {
    user: `/lawyer/${id}`,
    polls: `/userPolls`,
    pollByID: `/poll/${id}`,

    courses: `/courses`,
    coursesUser: `/userCourses`,
    courseByID: `/course/${id}`,

    courseWaiting: `/courses/waitingConfirmation`,

    news: `/news`,
    newsById: `/news/${id}`,
    agendas: `/agendas`,
    agendasById: `/agenda/${id}`,

    fees: `/lawyer/fees`,

    paymentOrderCheck: `/payments/order/${id}`,
    paymentResponse: "/payments/vnpay_return",
    paymentResponseIPN: "/payments/vnpay_ipn",

    lawyers: `/lawyers/app`,
    lawyerByID: `/lawyer/${id}`,

    complains: `/complain`,

    notifications: "/user/notifications",
  };
};
const POST = (id) => {
  return {
    login: `/login`,
    registerLawyer: `/registerLawyer`,
    registerUser: `/register`,
    forgotPassword: `/confirmResetPassword`,
    resetPassword: `/resetPassword/${id}`,
    resetPasswordFistTime: `/resetPasswordFistTime`,

    courseSearch: "/courses/search",
    courseCreatePaymentUrl: `/course/${id}/create_payment_url`,

    submitComplain: "/complain",

    createPaymentUrl: "/payments/create_payment_url",

    postFirToken: "/lawyer/firToken",

    searchLawyers: "/lawyers/searchLawyers",
  };
};
const UPDATE = (id) => {
  return {
    polls: `/poll/${id}/updateVote`,
    profile: `/lawyer/`,
    changePassword: `/user/${id}/changepassword`,

    courseRegister: `/course/${id}/updateRegisteredMembers`,

    updateMonthlyFee: `/fees`,

    updateNotifications: `/user/notifications/`,
  };
};
const DELETE = () => {};

export default { GET, POST, UPDATE, DELETE };
