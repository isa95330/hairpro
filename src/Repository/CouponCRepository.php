<?php

namespace App\Repository;

use App\Entity\CouponC;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CouponC>
 *
 * @method CouponC|null find($id, $lockMode = null, $lockVersion = null)
 * @method CouponC|null findOneBy(array $criteria, array $orderBy = null)
 * @method CouponC[]    findAll()
 * @method CouponC[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CouponCRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CouponC::class);
    }

//    /**
//     * @return CouponC[] Returns an array of CouponC objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CouponC
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
