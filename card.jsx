import styles from './styles.module.css'





export default  () => { 
    return(
        
    <div className={styles.container}>  
        <h1 className={styles.tittle}>Pôster Star Wars (1977)</h1>
        
        <p>Um pôster épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir para pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
       
    <img src="../public/poster.jpg" className={styles.img}></img>

       
   
 
     </div>

    )
}