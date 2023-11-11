# test-wow-ai
# Huong dan

-   De chay project thuc hien command sau: `docker compose up -d`
    tu ben ngoai muon call vao server thi deu phai thong qua api gateway, con cac server ben trong chi giao tiep qua network noi bo

## Webserver

-   chay truc tiep tren local khong qua docker
    mo file `index.html`
-   chay qua docker
    truy cap http://localhost:8080

## ApiGateway

-   chay truc tiep tren local khong qua docker
    chay command sau `nodemon --config nodemon.json api-gateway/index.ts.ts`
-   chay qua docker
    truy cap http://localhost:3000

## ServerGRPC

-   chay truc tiep tren local khong qua docker
    chay command sau `nodemon --config nodemon.json server/index.ts.ts`
-   chay qua docker
    de bao mat server nay chi chay trong network cua docker co the su dung Docker's built-in DNS `server-container` hoac `locahost:3001`
