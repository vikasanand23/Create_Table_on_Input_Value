(function() {
    function homeFunc($scope) {
        $scope.title = "Welcome to SpringWiz";
        $scope.innerTxt = "is founded by a Global team of Entrepreneurs, Engineers and Data Scientists with expertise and experience in solving real world issues with intuitive interface and intelligent backend.";
        $scope.invoiceImg = "images/einvoice-icon-1-1.png";
        $scope.invoiceTitle = "e-Invoicing";
        $scope.invoiceContent = "Stop chasing for payments. Send professional e-invoices within minutes, set payment reminders, sync your data with Tally and manage cash flow.";

        $scope.leaveImg = "images/leave-salary-icon-1.png";
        $scope.leaveTitle = "Leave and Salary";
        $scope.leaveContent = "Configure salary structure, automate salaries, manage reimbursements and track leaves. Avoid manual entry errors, save time and bring efficiency.";

        $scope.loanImg = "images/loan-icon-2-1.png";
        $scope.loanTitle = "Collateral Free Loans";
        $scope.loanContent = "Get collateral free business loans from India’s leading NBFCs. No processing cost, less processing time competitive interest rates and hassle free process.";

        $scope.btnTxt = "Read More";
        $scope.btnHref = "http://www.spiderg.com/";
    }
    angular.module("app").controller("homeController", homeFunc)
}());
