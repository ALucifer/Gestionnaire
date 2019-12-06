<?php
namespace App\Services;


use App\Repository\AchatRepository;
use App\Repository\CategoryRepository;

class StatistiqueService
{
    /**
     * @var AchatRepository
     */
    private $repository;

    public function __construct(CategoryRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getGlobalStatistique()
    {
        $achats = $this->repository->getStatistiques();

        $formatedResult = [];

        foreach ($achats as $achat) {
            $formatedResult['labels'][] = $achat['label'];
            $formatedResult['datasets']['data'][] = $achat['total'];
            $formatedResult['datasets']['backgroundColor'][] = $this->random_color();
        }

        return $formatedResult;
    }

    private function random_color_part() {
        return str_pad( dechex( mt_rand( 0, 255 ) ), 2, '0', STR_PAD_LEFT);
    }

    private function random_color() {
        return "#" . $this->random_color_part() . $this->random_color_part() . $this->random_color_part();
    }

}