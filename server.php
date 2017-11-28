<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $home = $_POST['home'];
    $part = $_POST['part'];
    $apart = $_POST['apart'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $cash = $_POST['payment'];
    $card = $_POST['payment'];
    $callback = $_POST['call'];

     
     
    $mail_message = '
    <html>
        <head>
            <title>Заказ</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>телефон: ' . $phone . '</li>
                <li>улица: ' . $street . '</li>
                <li>дом: ' . $home . '</li>
                <li>корпус: ' . $part . '</li>
                <li>квартира: ' . $apart . '</li>
                <li>этаж: ' . $floor . '</li>
                <li>комментарий: ' . $comment . '</li>
                <li>наличный: ' . $cash . '</li>
                <li>карта: ' . $card . '</li>
                <li>перезванивать: ' . $callback . '</li>
            </ul>
        </body>
    </html>    
    ';
    $headers = "From: Администратор сайта <washerd2008@gmail.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('washerd2008@gmail.com', 'Заказ с сайта', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }
    echo json_encode($data);

    
?>