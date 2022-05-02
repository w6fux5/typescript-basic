建立一個 CsvFileReader class，帶入 csv 的檔案名稱後建立實例
這個 class 需要有一個名稱為 read 的方法
read 可讀取 csv 檔案，編碼為 utf-8

(11/08/2018,Newcastle,Tottenham,1,2,A,M Atkinson)

數據格式為

[[11/08/2018,Newcastle, Tottenham, 1, 2, A, M Atkinson], [...other row]]

[[Date, string, string , number, number, Enum, string ], [...]]

第一種方法
CsvFileReader 為獨立且可重用的 class，可搭配不同的子類接收及輸出不同的檔案格式

第二種方法
GameReader 為獨立且可重用的 class，但可搭配不同的子類接受不同的數據來源，比如 CsvFileReader 可讀取本地端的 csv，也可以另外寫一個呼叫外部 api 的 class 作為數據來源
